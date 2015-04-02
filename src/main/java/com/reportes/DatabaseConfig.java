package com.reportes;

import org.apache.commons.dbcp.BasicDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;


@Configuration
@MapperScan(basePackages="com.reportes.persistence")
public class DatabaseConfig {
    

   @Bean
    public DataSource dataSource() {
        	BasicDataSource dataSource = new BasicDataSource();
	       dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	       dataSource.setUrl("jdbc:sqlserver://PRACTIAPENB029\\SQLEXPRESS;databaseName=NORTHWND");
	       dataSource.setUsername("sa");
	       dataSource.setPassword("123456");
	       return dataSource;
    }

    @Bean
    public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        return sessionFactory.getObject();
    }

}
