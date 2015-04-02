package com.reportes.persistence;
import java.util.List;
 
import org.apache.ibatis.annotations.Options;

import org.apache.ibatis.annotations.Select;
 import org.apache.ibatis.mapping.StatementType;
 
import com.reportes.model.Venta;
public interface VentaDAO{


@Select(value = "{call VentasPorCategoria()}")
@Options(statementType = StatementType.CALLABLE)
public List<Venta> getVentasPorCategoria();


@Select(value = "{call VentasPorCategoria2()}")
@Options(statementType = StatementType.CALLABLE)
public List<Venta> getVentasPorCategoria2();


@Select(value = "{call VentasPorCategoria3()}")
@Options(statementType = StatementType.CALLABLE)
public List<Venta> getVentasPorCategoria3();

}
