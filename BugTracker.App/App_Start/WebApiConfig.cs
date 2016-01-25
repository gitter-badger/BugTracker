﻿using System.Web.Http;

namespace BugTracker.App
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}"
            );

            config.Routes.IgnoreRoute(
                routeName: "Static",
                routeTemplate: "static/*"
            );
        }
    }
}
