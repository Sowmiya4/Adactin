package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {
	
	public static Properties ps;

	public ConfigurationReader() throws IOException {

		File file = new File("src\\test\\java\\com\\adactin\\properties\\Configuration.properties");
		FileInputStream fis = new FileInputStream(file);
		ps = new Properties();
		ps.load(fis);
	}

	public static String getBrowser() {
		
		String browsername = ps.getProperty("browser");
		return browsername;
	}
	
	public static String getUrl() {

		String url = ps.getProperty("url");
		return url;
	}
	
	
	
	
	
}
