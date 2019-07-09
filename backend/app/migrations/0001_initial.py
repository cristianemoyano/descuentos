# Generated by Django 2.2.3 on 2019-07-09 20:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Commerce',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
                ('phone', models.CharField(max_length=255)),
                ('website', models.CharField(max_length=255)),
                ('facebook', models.CharField(blank=True, default='', max_length=255)),
                ('twitter', models.CharField(blank=True, default='', max_length=255)),
                ('instagram', models.CharField(blank=True, default='', max_length=255)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='app.Category')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, default='')),
                ('url', models.CharField(max_length=255)),
                ('extension', models.CharField(max_length=5)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('title', models.CharField(max_length=120)),
                ('description', models.TextField()),
                ('completed', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='CommerceAddress',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('modified_date', models.DateTimeField(auto_now=True)),
                ('deleted', models.BooleanField(default=False)),
                ('address_one', models.CharField(max_length=255)),
                ('address_two', models.CharField(blank=True, default='', max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('zip_code', models.CharField(max_length=255)),
                ('country', models.CharField(max_length=255)),
                ('latitude', models.CharField(blank=True, default='', max_length=255)),
                ('longitude', models.CharField(blank=True, default='', max_length=255)),
                ('commerce', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='app.Commerce')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='commerce',
            name='logo',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='app.Image'),
        ),
    ]
