# Generated by Django 2.1 on 2018-10-03 07:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0006_auto_20180930_1910'),
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('MainPaige', models.CharField(blank=True, max_length=1000)),
            ],
            options={
                'db_table': 'Content',
            },
        ),
        migrations.CreateModel(
            name='ContentImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, upload_to='images/content/')),
                ('imageContent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='catalog.Content')),
            ],
            options={
                'db_table': 'ContentImages',
            },
        ),
    ]