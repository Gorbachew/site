#-*- coding: utf-8 -*-
from django.shortcuts import render,redirect
from django.template.context_processors import csrf
from django.contrib import auth

def login(request):

    args = {}
    args.update(csrf(request))
    if request.POST:
        username = request.POST.get('username','')
        password = request.POST.get('password','')
        user = auth.authenticate(username = username,password = password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
        else:
            args['login_error'] = "Пользователь не найден"
            return render(request,'loginsys/login.html',args)

    return render(request, 'loginsys/login.html')

def logout(request):
    auth.logout(request)
    return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
    return redirect(return_path)
