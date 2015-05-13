<?php
return array(
    //'配置项'=>'配置值'
    'LAYOUT_ON'=>true,
    // URL伪静态后缀设置
    'URL_HTML_SUFFIX'       =>  'shtml',  
    // 默认页面
    'DEFAULT_CONTROLLER' => 'index',
    // 操作方法后缀
    'ACTION_SUFFIX' => 'Action',
    // 开启路由
    'URL_ROUTER_ON' => true,
    // 设置路由规则
    'URL_ROUTE_RULES' => array(
        'index' => array('Home/Index/index'),
        'regist' => array('Home/Index/regist'),
    ),
);