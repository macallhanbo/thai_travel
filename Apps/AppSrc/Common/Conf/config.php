<?php

/**
 * ThinkPHP应用配置文件
 */
return array(
    //'配置项'=>'配置值'
    // rewrite模式
    'URL_MODEL' => 2,
    // url中可以去除模块名
    'MODULE_ALLOW_LIST' => array('Home'),
    'LOAD_EXT_CONFIG' => array(
        APP_ENV . '/app_config',
        APP_ENV . '/db',
        APP_ENV . '/error_message'
    ),
);
