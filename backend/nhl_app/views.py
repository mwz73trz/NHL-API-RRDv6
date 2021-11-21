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

def team_venue(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}").json()
    venue = response['teams'][0]['venue']
    return JsonResponse(venue, safe=False)

def team_conference(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}").json()
    conference = response['teams'][0]['conference']
    return JsonResponse(conference, safe=False)

def team_division(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}").json()
    division = response['teams'][0]['division']
    return JsonResponse(division, safe=False)
