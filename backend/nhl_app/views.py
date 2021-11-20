from django.shortcuts import render
from django.http import JsonResponse, response
import requests

def get_teams(request):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams").json()
    teams = response['teams']
    return JsonResponse(teams, safe=False)

def team_detail(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}").json()
    team = response['teams'][0]
    return JsonResponse(team, safe=False)
