# Generated by Django 2.1 on 2018-10-03 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0007_content_contentimages'),
    ]

    operations = [
        migrations.AlterField(
            model_name='content',
            name='MainPaige',
            field=models.TextField(blank=True, max_length=1000),
        ),
    ]
