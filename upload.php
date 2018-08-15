<?php
$path = "uploads/";

$extArr = array("jpg", "png", "gif");

if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
        $name = $_FILES['photoimg']['name'];
        $size = $_FILES['photoimg']['size'];
        
        if(empty($name)){
                echo '请选择要上传的图片';
                exit;
        }
        $ext = extend($name);
        if(!in_array($ext,$extArr)){
                echo '图片格式错误！';
                exit;
        }
        if($size>(5120*1024)){
                //echo '<script type="text/javascript">alert("图片大小不能大于5MB");</script>';
                echo '<h3 style="margin:0 auto;text-align:center;">图片大小不能大于5MB</h3>
                <script type="text/javascript">hide("wait");</script>';
                exit;
        }
        $image_name = time().rand(1,1024).".".$ext;
        $tmp = $_FILES['photoimg']['tmp_name'];
        if(move_uploaded_file($tmp, $path.$image_name)){
                echo '<a href="javascript:void(0)" onclick="add()";><img id="previews" style="border-radius:50%;" src="'.$path.$image_name.'"></a>
                <script type="text/javascript">creatPic_per([216],[245],["previews"],[208],[208]);hide("wait");</script>';
        }else{
                echo '上传出错了！';
                
        }
        exit;
}
exit;


function extend($file_name){
        $extend = pathinfo($file_name);
        $extend = strtolower($extend["extension"]);
        return $extend;
}
?>