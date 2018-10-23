#-*- coding: utf-8 -*-
from django.forms import ModelForm
from news.models import Comments,Articles
from .models import forms

class CommentForm(ModelForm):
    class Meta:
        model = Comments
        fields = ['text']

        widgets = {
            'text': forms.Textarea(attrs={'class': 'addcomments','cols':'88','maxlength': '225','placeholder':'Оставьте ваш комментарий','required':'','rows':'3'}),
        }

class PostForm(ModelForm):
    class Meta:
        model = Articles
        fields = ['title','post']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control','id':'titleAddpost','placeholder':'Заголовок'}),
            'post': forms.Textarea(attrs={'class': 'form-control','maxlength': '2000','placeholder':'Ваш пост'}),
        }
