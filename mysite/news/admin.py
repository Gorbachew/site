from django.contrib import admin
from news.models import Articles, Comments
# Register your models here.

class ArticleInline(admin.StackedInline):
    model = Comments
    extra = 1
    list_filter = ['date']
class ArticleAdmin(admin.ModelAdmin):
    fields = ['title','author','post','date'] #Отображает указанные столбцы в админ панели.
    inlines = [ArticleInline]
    list_filter = ['date']


admin.site.register(Articles,ArticleAdmin)
