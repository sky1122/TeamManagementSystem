from django.http import JsonResponse
from django.shortcuts import HttpResponse, render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .models import Member, Team
from .serializers import MemberSerializer, TeamSerializer
from rest_framework.decorators import api_view
# Create your views here.
# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")

# Create a list of all the members
@csrf_exempt
@api_view(['GET', 'POST', 'DELETE'])
def member_list(request):
    if request.method == 'GET':
        print(request.GET.get("team"))
        members = Member.objects.all()
        if request.GET.get("team") is None:
            serializer = MemberSerializer(members, many=True)
        else:
            serializer = MemberSerializer(members.filter(team=request.GET.get("team")), many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
@api_view(['GET', 'POST', 'DELETE'])
def team_list(request):
    if request.method == 'GET':
        teams = Team.objects.all()
        serializer = TeamSerializer(teams, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        print(request)
        data = JSONParser().parse(request)
        print("2")
        serializer = TeamSerializer(data=data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        print(serializer.is_valid())
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def member_detail(request, pk):
    try:
        member = Member.objects.get(pk=pk)
    except Member.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = MemberSerializer(member)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        print("data")
        print(data)
        serializer = MemberSerializer(member, data=data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        member.delete()
        return HttpResponse(status=204)

@csrf_exempt
@api_view(['GET', 'POST', 'DELETE', 'PUT'])
def team_detail(request, pk):
    try:
        team = Team.objects.get(pk=pk)
    except Team.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TeamSerializer(team)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TeamSerializer(team, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        team.delete()
        return HttpResponse(status=204)

