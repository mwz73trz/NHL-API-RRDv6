from django.urls import path, include
from nhl_app import views

urlpatterns = [
    path('teams/', views.get_teams, name='get_teams'),
    path('teams/<int:teamId>/', views.team_detail, name='team_detail'),
    path('teams/<int:teamId>/venue/', views.team_venue, name='team_venue'),
    path('teams/<int:teamId>/conference/', views.team_conference, name='team_conference'),
    path('teams/<int:teamId>/division/', views.team_division, name='team_division'),
]