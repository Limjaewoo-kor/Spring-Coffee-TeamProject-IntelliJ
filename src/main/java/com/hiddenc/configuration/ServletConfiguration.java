package com.hiddenc.configuration;


import com.hiddenc.admin.beans.AdminConnection;

import com.hiddenc.admin.beans.adminAmontBean;
//import com.hiddenc.admin.interceptor.AdminInterceptor;
//import com.hiddenc.admin.interceptor.LoginInterceptor;
import com.hiddenc.hyun.review.dto.ReviewDto;
import com.hiddenc.model.dto.CafeDto;
import com.hiddenc.model.dto.UserDto;
import com.hiddenc.model.mapper.CafeMapper;
import com.hiddenc.model.mapper.ReviewMapper;
import com.hiddenc.model.mapper.UserMapper;
import com.hiddenc.model.mapper.VisitLogMapper;
import com.hiddenc.model.mapper.MypageMapper;
import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.mapper.MapperFactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpMethod;
import org.springframework.web.context.annotation.ApplicationScope;
import org.springframework.web.context.annotation.SessionScope;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.config.annotation.*;

import javax.annotation.Resource;

@Configuration
@EnableWebMvc
@ComponentScan("com.hiddenc")
@PropertySource("/WEB-INF/properties/db.properties")
@PropertySource("/WEB-INF/properties/Admin.properties")
public class ServletConfiguration implements WebMvcConfigurer {

    @Value("${db.classname}")
    private String db_classname;
    @Value("${db.url}")
    private String db_url;
    @Value("${db.username}")
    private String db_username;
    @Value("${db.password}")
    private String db_password;

    @Value("${Admin_id}")
    private String admin_id;
    @Value("${Admin_pw}")
    private String admin_pw;

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry) {
        registry.jsp("/views/", ".jsp");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/");

        registry.addResourceHandler("swagger-ui.html")
                .addResourceLocations("classpath:/META-INF/resources/");

        registry.addResourceHandler("/webjars/**")
                .addResourceLocations("classpath:/META-INF/resources/webjars/");

    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods(HttpMethod.POST.name())
                .allowCredentials(false)
                .maxAge(3600);
    }

    // Login Session
    @Bean
    @SessionScope
    public UserDto userDto() {
        return new UserDto();
    }

    @Autowired
    private UserDto userDto;

    @Bean("adminLoginBean")
    @SessionScope
    public AdminConnection adminLoginBean(){
        return new AdminConnection();
    }


    @Resource(name = "adminLoginBean")
    private AdminConnection adminConnection;


//    @Override
//    public void addInterceptors(InterceptorRegistry registry) {
//        registry.addInterceptor(new LoginInterceptor(userDto)).addPathPatterns("/login/**").excludePathPatterns("/login");
//        registry.addInterceptor(new AdminInterceptor(adminConnection)).addPathPatterns("/admin/**").excludePathPatterns("/admin");
//    }

    @Bean
    public BasicDataSource basicDataSource(){
        BasicDataSource basicDataSource = new BasicDataSource();
        basicDataSource.setDriverClassName(db_classname);
        basicDataSource.setUrl(db_url);
        basicDataSource.setUsername(db_username);
        basicDataSource.setPassword(db_password);
        return basicDataSource;
    }

    @Bean
    public MultipartResolver multipartResolver() {
        org.springframework.web.multipart.commons.CommonsMultipartResolver multipartResolver = new org.springframework.web.multipart.commons.CommonsMultipartResolver();
        multipartResolver.setMaxUploadSize(10485760); // 1024 * 1024 * 10
        return multipartResolver;
    }


    @Bean
    public SqlSessionFactory sqlSessionFactory(BasicDataSource basicDataSource) throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(basicDataSource);
        SqlSessionFactory sqlSessionFactory = factoryBean.getObject();
        return sqlSessionFactory;
    }

    @Bean
    public MapperFactoryBean<UserMapper> userMapperFactoryBean(SqlSessionFactory sqlSessionFactory) {
        MapperFactoryBean<UserMapper> factoryBean = new MapperFactoryBean<>(UserMapper.class);
        factoryBean.setSqlSessionFactory(sqlSessionFactory);
        return factoryBean;
    }
    @Bean
    public MapperFactoryBean<CafeMapper> cafeMapperFactoryBean(SqlSessionFactory sqlSessionFactory) {
        MapperFactoryBean<CafeMapper> factoryBean = new MapperFactoryBean<>(CafeMapper.class);
        factoryBean.setSqlSessionFactory(sqlSessionFactory);
        return factoryBean;
    }



    // CafeDto Bean
    @Bean
    public CafeDto cafeDto() {
        return new CafeDto();
    }

    // Review Bean
    @Bean
    public ReviewDto reviewDto() {return new ReviewDto();}


    @Bean
    public MapperFactoryBean<MypageMapper> mypageMapperFactoryBean(SqlSessionFactory sqlSessionFactory) {
        MapperFactoryBean<MypageMapper> factoryBean = new MapperFactoryBean<>(MypageMapper.class);
        factoryBean.setSqlSessionFactory(sqlSessionFactory);
        return factoryBean;
    }

    @Bean
    public MapperFactoryBean<VisitLogMapper> VisitLogMapperFactoryBean (SqlSessionFactory sqlSessionFactory) {
        MapperFactoryBean<VisitLogMapper> factoryBean = new MapperFactoryBean<>(VisitLogMapper.class);
        factoryBean.setSqlSessionFactory(sqlSessionFactory);
        return factoryBean;
    }

    @Bean
    public MapperFactoryBean<ReviewMapper> reviewMapperMapperFactoryBean (SqlSessionFactory sqlSessionFactory) {
        MapperFactoryBean<ReviewMapper> factoryBean = new MapperFactoryBean<>(ReviewMapper.class);
        factoryBean.setSqlSessionFactory(sqlSessionFactory);
        return factoryBean;
    }

    @Bean(name="adminlogin")
    public AdminConnection adminConnection(){
        AdminConnection adminConnection = new AdminConnection();
        adminConnection.setAdmin_id(admin_id);
        adminConnection.setAdmin_pw(admin_pw);
        return adminConnection;
    }

    @Bean
    @ApplicationScope
    public com.hiddenc.admin.beans.adminAmontBean adminAmontBean(){
        return new adminAmontBean();
    }

}
