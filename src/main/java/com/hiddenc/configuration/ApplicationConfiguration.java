package com.hiddenc.configuration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

public class ApplicationConfiguration implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext servletConfiguration = new AnnotationConfigWebApplicationContext();
        servletConfiguration.register(ServletConfiguration.class);
        DispatcherServlet dispatcherServlet = new DispatcherServlet(servletConfiguration);
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet("dispatcher", dispatcherServlet);
        dispatcher.addMapping("/");
        dispatcher.setLoadOnStartup(1);

        AnnotationConfigWebApplicationContext rootConfiguration = new AnnotationConfigWebApplicationContext();
        rootConfiguration.register(RootContfiguration.class);
        ContextLoaderListener listener = new ContextLoaderListener(rootConfiguration);
        servletContext.addListener(listener);

        FilterRegistration.Dynamic filter = servletContext.addFilter("encodingFilter", CharacterEncodingFilter.class);
        filter.addMappingForServletNames(null, false, "dispatcher");
        filter.setInitParameter("encoding", "UTF-8");


    }
}
