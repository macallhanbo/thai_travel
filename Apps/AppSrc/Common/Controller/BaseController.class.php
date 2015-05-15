<?php

namespace Common\Controller;

use Think\Controller;

class BaseController extends Controller {

    public function __construct() {
        parent::__construct();
    }
    
    protected function json_success_response($data, $escape_flg = FALSE)
    {
        if ($escape_flg)
        {
            $data = $this->_escape_data($data);
        }
        $res = array(
            'status' => RESPONSE_SUCCESS,
            'data' => $data
        );

        header('Content-type: application/json');
        echo json_encode($res);
    }
    
    protected function json_error_response($error,$error_url = NULL, $code = RESPONSE_FAIL)
    {
        $res = array(
            'status' => $code,
            'error_message' => $error
        );
        if (!empty($error_url))
        {
            $res['error_url'] = $error_url;
        }

        header('Content-type: application/json');
        echo json_encode($res);
    }
    
    private function _escape_data($data)
    {
        if (!is_array($data) || count($data) == 0)
        {
            return $data;
        }

        foreach ($data as $key => $value)
        {
            $html_flg = preg_match('/^html/', $key);
            if (is_array($value))
            {
                $data[$key] = $this->_escape_data($value);
            }
            else if (is_string($value) && !$html_flg)
            {
                $data[$key] = remove_xss(htmlspecialchars($value));
            }
        }
        return $data;
    }
}
