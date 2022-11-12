# will take modal and convert it to json
from rest_framework import serializers
from .models import Member, Team

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['id', 'team', 'first_name', 'last_name', 'email', 'phone', 'role']

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'description']