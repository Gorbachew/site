#-*- coding: utf-8 -*-
from django.forms import ModelForm
from news.models import Comments
from .models import forms

class CommentForm(ModelForm):
    class Meta:
        model = Comments
        fields = ['text']

        widgets = {
            'text': forms.Textarea(attrs={'class': 'addcomments','cols':'88','maxlength': '225','placeholder':'Оставьте ваш комментарий','required':'','rows':'3'}),
        }
