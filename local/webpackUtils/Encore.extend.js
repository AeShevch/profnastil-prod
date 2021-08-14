"use strict";

/** @const @symfony/webpack-encore */
const Encore = require("@symfony/webpack-encore");

/**
 * ���������� ���������� � Encore JS-����� ����/����� ��� ����������
 *
 * @param {string} name �������� ���������� � ������� demo:news.list
 *
 * ���. ��������� ����� ����/�����
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - �������� ����� � �������
 * out - ����-����, � ������� ��� ����������
 * template - ����� ����������, � ������� ����� ������ ����
 * siteTemplate - �������� ������� �����, ���� ������ ���������� �� � /local/components/
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentJs = (name, params = {}) => {
  // ������ ��������� ��������� �� ��������
  const paramsJs = Object.assign(
    {},
    {
      app: "js/app.js",
      out: "script",
      template: ".default",
      siteTemplate: false,
    },
    params
  );

  if (!paramsJs.siteTemplate) {
    paramsJs.app = `../templates/${paramsJs.template}/src/${paramsJs.app}`;
  }

  // �������� ����� ����/�����
  let entry = Encore.BXComponent.getEntry(name, paramsJs);

  // ��������� � Encore ����� �����
  return Encore.addEntry(entry.build + "-" + paramsJs.template, entry.app);
};

/**
 * ���������� ���������� � Encore style-����� ����/����� ��� ����������
 *
 * @param {string} name �������� ���������� � ������� demo:news.list
 *
 * ���. ��������� ����� ����/�����
 * @param params {{
 * 	app: {string},
 * 	out: {string},
 * 	template: {string},
 * 	siteTemplate: {string}
 * }}
 * app - �������� ����� � �������
 * out - ����-����, � ������� ��� ����������
 * template - ����� ����������, � ������� ����� ������ ����
 * siteTemplate - �������� ������� �����, ���� ������ ���������� �� � /local/components/
 *
 * @returns {Encore}
 * @constructor
 */
Encore.BXComponentStyle = (name, params = {}) => {
  const paramsCss = Object.assign(
    {},
    {
      app: "scss/main.scss",
      template: ".default",
      siteTemplate: false,
      out: "style",
    },
    params
  );

  if (!paramsCss.siteTemplate) {
    paramsCss.app = `../templates/${paramsCss.template}/src/${paramsCss.app}`;
  }

  // if (!params.hasOwnProperty("out")) {
  //   params.out =
  //     name.replace(":", "_") + "_" + paramsCss.template.replace(".", "");
  // }

  const entry = Encore.BXComponent.getStyleEntry(name, paramsCss);
  return Encore.addStyleEntry(entry.build, entry.app);
};

module.exports = Encore;
