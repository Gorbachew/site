# Generated by Django 2.1.1 on 2018-10-23 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginsys', '0006_auto_20181022_2340'),
    ]

    operations = [
        migrations.AlterField(
            model_name='additionalusers',
            name='city',
            field=models.CharField(max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='additionalusers',
            name='date_of_birth',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='additionalusers',
            name='phonenumber',
            field=models.CharField(max_length=11, null=True),
        ),
        migrations.AlterField(
            model_name='additionalusers',
            name='status',
            field=models.CharField(max_length=120, null=True),
        ),
    ]