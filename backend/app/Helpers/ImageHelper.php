<?php

namespace App\Helpers;

use Illuminate\Support\Facades\File;

class ImageHelper
{
    public static function imageToBase64AndStore($imagePath)
    {
        if (File::exists($imagePath)) {
            $fileData = File::get($imagePath);
            $base64Data = base64_encode($fileData);

            return $base64Data;
        }

        return null;
    }

    public static function base64ToImageAndRetrieve($base64Data, $imageName)
    {
        $imageData = base64_decode($base64Data);
        $imagePath = public_path('images/' . $imageName); // Adjust the path as per your requirements

        if (file_put_contents($imagePath, $imageData)) {
            return $imagePath;
        }

        return null;
    }
}
