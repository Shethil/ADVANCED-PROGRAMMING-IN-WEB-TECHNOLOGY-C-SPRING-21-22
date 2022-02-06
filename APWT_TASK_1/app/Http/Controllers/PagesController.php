<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    
    public function home(){
        return view('home');
    }

    public function product(){
        $names=array("Product A","Product B","Product C");
        return view('product')->with('names',$names);
    }

    public function ourteams(){
        return view('ourteams');
    }

    public function contact(){
        return view('contact');
    }

    public function about(){
        return view('about');
    }


}
