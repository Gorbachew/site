#-*- coding: utf-8 -*-
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from django import forms
from .models import UsersImages,AdditionalUsers

class LoginForm(ModelForm):
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control','placeholder': 'Имя пользователя'}),help_text='',label='')
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control','placeholder': 'Пароль'}),help_text='',label='')
    class Meta:
        model = User
        fields = ['username','password']


class RegisterForm(UserCreationForm):
    # Удалить ненужные обьекты формы
    '''
    def __init__(self, *args, **kargs):
        super(UserCreationForm, self).__init__(*args, **kargs)
        del self.fields['password2']
        del self.fields['password1']
    '''
    # Пароли в форме UserCreationForm обьявляются в ручную, по этому прописать виджет им можно только вызвав переменные в классе
    username = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control mt-1','placeholder': 'Логин'}),label='')
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control mt-1','placeholder': 'Пароль'}),label='')
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control mt-1','placeholder': 'Повторите пароль'}),label='')
    email = forms.CharField(widget=forms.EmailInput(attrs={'class': 'form-control mt-1','placeholder': 'Email'}),label='')
    class Meta(UserCreationForm.Meta):
        model = User
        # fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2', )
        # Пароли обьявляются самостоятельно, чтобы их убрать можно использовать функцию на строке 24 этого файла
        fields = ['username','email']

class ImageForm(ModelForm):
  class Meta:
    model = UsersImages
    fields = ['image']
    widgets ={
    'image': forms.FileInput(attrs={'style':'display:none'}),
    }
