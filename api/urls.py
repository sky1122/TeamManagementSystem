
from django.urls import path
from .views import member_list, team_list, member_detail, team_detail


# 2
urlpatterns = [
    path('member', member_list),
    path('team', team_list),
    path('member/<int:pk>', member_detail),
    path('team/<int:pk>', team_detail),
]
