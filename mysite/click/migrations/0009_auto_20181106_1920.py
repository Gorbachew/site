# Generated by Django 2.1.1 on 2018-11-06 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('click', '0008_auto_20181106_1455'),
    ]

    operations = [
        migrations.AlterField(
            model_name='millionaire',
            name='cash',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=50, verbose_name=''),
        ),
        migrations.AlterField(
            model_name='millionaire',
            name='score',
            field=models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=50, verbose_name=''),
        ),
    ]
