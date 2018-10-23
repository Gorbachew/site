#-*- coding: utf-8 -*-
from django.shortcuts import render,redirect
from django.template.context_processors import csrf
from django.contrib import auth
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from loginsys.forms import RegisterForm,LoginForm,ImageForm
from .models import UsersImages,AdditionalUsers
from django.utils import timezone

def login(request):
    args = {}
    args.update(csrf(request))
    args['form'] = LoginForm()
    if request.POST:
        form = LoginForm(request.POST)
        username = form['username'].value()
        password = form['password'].value()
        form = auth.authenticate(username = username,password = password)
        if form is not None:
            auth.login(request,form)
            return redirect('/')
        else:
            args['login_error'] = "Пользователь не найден"
            return render(request,'loginsys/login.html',args)
    else:
        return render(request,'loginsys/login.html',args)


def logout(request):
    auth.logout(request)
    return_path  = request.META.get('HTTP_REFERER','/')#Возврат на предыдущую страницу
    return redirect(return_path)

def register(request):
    args={}
    args.update(csrf(request))
    args['form'] = RegisterForm()
    if request.POST:
        newuser_form = RegisterForm(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            print(newuser_form.cleaned_data['username'])
            user = User.objects.get(username = newuser_form.cleaned_data['username']) #Находит id юзера по нику
            additionalusers = AdditionalUsers(
              user = user
            )
            additionalusers.save()
            newuser = auth.authenticate(username = newuser_form.cleaned_data['username'],password = newuser_form.cleaned_data['password2'])
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['error'] = 'Вы ввели некоректные данные'
            args['helplogin'] = 'Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.'
            args['helppassword'] = '* Ваш пароль не должен совпадать с вашим именем или другой персональной информацией или быть слишком похожим на неё. \n * Ваш пароль должен содержать как минимум 8 символов.\n * Ваш пароль не может быть одним из широко распространённых паролей.\n* Ваш пароль не может состоять только из цифр.\n'
            return render(request, 'loginsys/register.html',args)
    return render(request,'loginsys/register.html',args)
# URL на эту функию в main/urls

def mypage(request, login):
    args = {}
    args.update(csrf(request))
    user_id = User.objects.values('id').get(username = login) #Находит id юзера по нику
    args['User'] = User.objects.filter(username = login)
    args['AdditionalUser'] = AdditionalUsers.objects.filter(user_id = user_id['id'])
    args['Avatar'] = UsersImages.objects.filter(user_id = user_id['id'],avatar = 'True') #Находит в таблице Изображений пользователей картинки присвоенные ид этого пользователя
    args['Addimage'] = ImageForm() #Добавляет невидимую форму для загрузки файла, а то чуть не удалил один раз
    if args['Avatar']:
        args['check'] = 1
    else:
        args['check'] = 0
    args['login'] = login
    if request.method == 'POST':
        edit = {}
        edit['editstatus'] = request.POST.get('editstatus')
        edit['editfirstname'] = request.POST.get('editfirstname')
        edit['editlastname'] = request.POST.get('editlastname')
        edit['editloginuser'] = request.POST.get('editloginuser')
        edit['editdate_of_birth'] = request.POST.get('editdate_of_birth')
        edit['editemail'] = request.POST.get('editemail')
        edit['editcity'] = request.POST.get('editcity')
        edit['editphonenumber'] = request.POST.get('editphonenumber')
        edituser = User.objects.get(id = str(user_id['id']))
        editadditionaluser = AdditionalUsers.objects.get(user_id = str(user_id['id']))

        edituser.first_name = edit['editfirstname']
        edituser.last_name = edit['editlastname']
        edituser.username = edit['editloginuser']
        edituser.email = edit['editemail']


        editadditionaluser.city = edit['editcity']
        editadditionaluser.date_of_birth = edit['editdate_of_birth']
        editadditionaluser.status = edit['editstatus']
        editadditionaluser.phonenumber = edit['editphonenumber']

        edituser.save()
        editadditionaluser.save()
        print(edit)
    return render(request,'loginsys/mypage.html',args)

def uploadimage(request):
    return_path  = request.META.get('HTTP_REFERER','/')
    if request.method == 'POST':
        form = ImageForm(request.POST,request.FILES)
        if form.is_valid():
            check = UsersImages.objects.filter(user = request.user)
            if check:
                check.delete()
            image = form.save(commit=False)
            image.date = timezone.now()
            image.user = request.user
            image.avatar = 1
            form.save()
            return redirect(return_path)
        else:
            return render(request,return_path,{'form':form})

    return redirect(return_path)

def deleteimage(request):
    return_path  = request.META.get('HTTP_REFERER','/')
    check = UsersImages.objects.filter(user = request.user)
    if check:
        check.delete()
    return redirect(return_path)
