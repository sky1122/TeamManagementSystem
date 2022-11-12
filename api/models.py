from django.db import models

# Create your models here.

# the model type in here will create a table in the database
# ID will automatically be added to the table as a primary key
class Member(models.Model):
    ROLE_CHOICES = (
        ('0', 'admin'),
        ('1', 'regular'),
    )
    team = models.ForeignKey(to='Team', to_field='id', null=True, blank=True, on_delete=models.SET_NULL)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, unique=True)
    role = models.CharField(max_length=1, choices=ROLE_CHOICES, default='1')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.first_name

# if want to add somethng, we need to (null=true)

class Team(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

# 新建数据
# class.boject.create()
# Member.objects.create(name='John',email='')

# 删除数据
# Member.objects.filter(name='John').delete()
# Member.objects.all().delete()  删除表中所以数据

# 获取数据
# data_list = [对象, b, c] QuerySet类型
# data_list = Member.objects.all()
# for obj in data_list:
#     print(obj.name)
# data_list = Member.objects.filter(name='John') 寻找name为John的数据
# 注意，这个类型依旧是QuerySet类型，所以需要遍历


# 更新数据
# 先找到，再更新
# Member.objects.all().update(name='John')  将所有人的名字改为John
# Member.objects.filter(name='John').update(name='Jack')  将john改为jack

