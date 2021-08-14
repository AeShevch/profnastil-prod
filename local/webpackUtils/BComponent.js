/** @var {Object} process */

"use strict";
import path from 'path';
import _ from 'lodash';
import fs from 'fs';

const PrettyError = require('pretty-error');

/**
 * @class - ���������� �����
 */
class BComponent {
	/** @param params {{root: ''}}
	 * root = DOCUMENT_ROOT ������������ ��������
	 * */
	constructor(params = {}) {
		this.components = {};
		this.props = {
			root: ''
		};

		// ������ ��������� ��������� �� ��������
		this.props = Object.assign({}, this.props, params);

		try {
			if(_.isEmpty(this.props.root)) {
				throw new Error('Set the root path'); // ��������, ���� �� ���������� DOCUMENT_ROOT
			}
		} catch (error) {
			this._getError(error);
		}

	}

	/**
	 * ���������� ���������� ���������� � ����� ����/�����
	 * @param {string} name - �������� ���������� demo:news
	 * @param params {{
	 * 	 app: {string},
	 *   out: {string},
	 * 	 template: {string},
	 * 	 siteTemplate: {string}
	 * }}
	 * @param {string} type - js|style
	 * @private
	 */
	_add(name, params, type = 'js'){
		let arName = name.split(':'); // ������ ��� ����������

		if(!this.components.hasOwnProperty(name))
			this.components[name] = {};

		try {
			// �������� ������� �����
			if (_.isEmpty(arName[1])) {
				throw new Error('the name of the component should be standard "folder:name"');
			}

			// ���� ����� ���������� �� �������
			let folder = this.searchComponent(arName, params.siteTemplate);

			let appPath = '', buildPath = '';

			// ���� � ���������� ������ siteTemplate, ������ ��������� ����� ��� � ���� ���� ������� � ��� ������
			if(params.siteTemplate){
				appPath = path.join(folder, params.template, 'src');
				buildPath = path.join(folder, params.template);
			} else {
				appPath = path.join(folder, 'src');
				if(arName[0] === 'bitrix'){
					buildPath = path.join(folder, params.template);
				} else {
					buildPath = path.join(folder, 'templates', params.template);
				}
			}

			// ���� � ���������� ��� ����� /app - �������� ��
			// if(!fs.existsSync(appPath)){
			// 	fs.mkdirSync(appPath, 0o775);
			// }

			// ���� � ���������� ��� �����, ���������� � ��������� app - �������� ���
			if(!fs.existsSync(path.join(appPath, params.app))){
				fs.writeFileSync(path.join(appPath, params.app), '')
			}

			// ��������� ������ ��������� ���� ������������ Encore.setOutputPath('site/public_html')
			buildPath = buildPath.replace(this.props.root + "/", '');

			this.components[name][type] = {
				build: path.join(buildPath, params.out),
				app: path.join(appPath, params.app)
			}

		} catch (error) {
			this._getError(error);
		}
	}

	/**
	 * ��������� ����� ��� js ������
	 * @param ComponentName
	 * @param params
	 * @returns {*}
	 */
	getEntry(ComponentName, params) {
		try {
			if(!this.components.hasOwnProperty(ComponentName)){
				this._add(ComponentName, params, 'js');
			} else if (!this.components[ComponentName].hasOwnProperty('js')){
				this._add(ComponentName, params, 'js');
			}

			return this.components[ComponentName]['js'];
		} catch (error) {
			this._getError(error);
		}
	}

	/**
	 * ��������� ����� ��� css ������
	 * @param ComponentName
	 * @param params
	 * @returns {*}
	 */
	getStyleEntry(ComponentName, params){
		try {
			if (
				// TODO !!!
        !this.components.hasOwnProperty(ComponentName) ||
        !this.components[ComponentName].hasOwnProperty("style") ||
        (this.components.hasOwnProperty(ComponentName) &&
          this.components[ComponentName].hasOwnProperty("style"))
      ) {
        this._add(ComponentName, params, "style");
      }

      return this.components[ComponentName]["style"];
		} catch (error) {
			this._getError(error);
		}
	}

	/**
	 * ����� ���������� �� �������
	 * @param name
	 * @param siteTemplate
	 * @returns {string} - ����� ����������
	 */
	searchComponent(name, siteTemplate) {
		if (siteTemplate === '.default')
			siteTemplate = false;

		/**
		 * �������� �������� ��� ������
		 * @type {{
		 * 	local: {siteTemplate: *, defaultTemplate: Array, default: Array},
		 * bitrix: {siteTemplate: *, defaultTemplate: Array}
		 * }}
		 */
		let appVariables = {
			'local': {
				siteTemplate,
				defaultTemplate: [],
				default: [],
			},
			'bitrix': {
				siteTemplate,
				defaultTemplate: [],
			}
		};

		if (!_.isEmpty(siteTemplate)) {
			appVariables.local.siteTemplate = _.concat(this.props.root, 'local', 'templates', siteTemplate, 'components', name);
		} else {
			appVariables.local.defaultTemplate = _.concat(this.props.root, 'local', 'templates', '.default', 'components', name);
		}

		appVariables.local.default = _.concat(this.props.root, 'local', 'components', name);

		let folder = '', tmpDir = '';

		_.forEach(appVariables.local, (val, key) => {
			tmpDir = _.join(val, '/');
			if(fs.existsSync(tmpDir)){
				folder = tmpDir;
			}
		});

		/**
		 * ���� ��������� �� � ����� local, �� ����� ������ ������ � bitrix/templates
		 */
		if(_.isEmpty(folder)){

			if (!_.isEmpty(siteTemplate)) {
				appVariables.bitrix.siteTemplate = _.concat(this.props.root, 'bitrix', 'templates', siteTemplate, 'components', name);
			}
			appVariables.bitrix.defaultTemplate = _.concat(this.props.root, 'bitrix', 'templates', '.default', 'components', name);

			_.forEach(appVariables.bitrix, (val, key) => {
				tmpDir = _.join(val, '/');
				if(fs.existsSync(tmpDir)){
					folder = tmpDir;
				}
			});
		}

		if(_.isEmpty(folder)){
		  console.log(folder);
			throw new Error(folder + 'component ' + name.join(':') + ' is not exist', 404);
		}

		return folder;
	}

	/**
	 * ������������ ���������� ������������� ������ � �������
	 * @param error
	 * @private
	 */
	_getError(error){
		const pe = new PrettyError();
		console.log(pe.render(error));
		process.exit(1);
	}

}

export default BComponent;
