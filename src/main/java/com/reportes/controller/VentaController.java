package com.reportes.controller;



import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.reportes.model.Venta;
import com.reportes.persistence.VentaDAO;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
@RequestMapping("/")
public class VentaController {

    
    @Autowired VentaDAO ventadaDAO;

    @RequestMapping(value="/ventasPorCategoria",method=RequestMethod.GET)
    public @ResponseBody List<Venta> sayHello() {
    	
        return  ventadaDAO.getVentasPorCategoria();
    }

    @RequestMapping(value="/ventasPorCategoria2",method=RequestMethod.GET)
    public @ResponseBody List<Venta> sayHello2() {
    	
        return  ventadaDAO.getVentasPorCategoria2();
    }

    @RequestMapping(value="/ventasPorCategoria3",method=RequestMethod.GET)
    public @ResponseBody List<Venta> sayHello3() {
        
        return  ventadaDAO.getVentasPorCategoria3();
    }

}