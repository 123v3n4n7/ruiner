# Generated by Django 2.1 on 2018-09-30 16:10

import catalog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0005_remove_producttype_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='imagelist',
            name='image',
        ),
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, upload_to=catalog.models.Product.get_upload_path),
        ),
        migrations.AddField(
            model_name='producttype',
            name='image',
            field=models.ImageField(blank=True, upload_to='images/productType/'),
        ),
        migrations.DeleteModel(
            name='ImageList',
        ),
    ]