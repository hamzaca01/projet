<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SignUpInController extends AbstractController
{
    #[Route('/', name: 'app_sign_up_in')]
    public function index(): Response
    {
        return $this->render('sign_up_in/index.html.twig', [
            'controller_name' => 'SignUpInController',
        ]);
    }
}
