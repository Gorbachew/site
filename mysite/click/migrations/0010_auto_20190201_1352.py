# Generated by Django 2.1.4 on 2019-02-01 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('click', '0009_auto_20181106_1920'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='millionaire',
            name='bastshoes',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='cats',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='currency',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='levelbuild',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='price_bastshoes',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='price_cats',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='price_levelbuild',
        ),
        migrations.RemoveField(
            model_name='millionaire',
            name='price_upgraide_currency',
        ),
        migrations.AddField(
            model_name='millionaire',
            name='builds',
            field=models.CharField(default='0000000000000000000000000000000000000000', max_length=40, verbose_name=''),
        ),
        migrations.AddField(
            model_name='millionaire',
            name='builds_ruined',
            field=models.CharField(default='1111111111', max_length=10, verbose_name=''),
        ),
    ]
