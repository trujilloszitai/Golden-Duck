using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient; //necesario para las funciones de SQL
using System.Windows.Forms.DataVisualization.Charting;

namespace LycokatConexion
{
    public partial class estadisticas : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking2; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public estadisticas(){InitializeComponent();}
        private void button4_Click(object sender, EventArgs e) => chart1.Series["GRAFICO"].ChartType = SeriesChartType.Bar;
        private void button5_Click(object sender, EventArgs e) => chart1.Series["GRAFICO"].ChartType = SeriesChartType.Pie;
        private void button6_Click(object sender, EventArgs e) => chart1.Series["GRAFICO"].ChartType = SeriesChartType.Area;
        private void button7_Click(object sender, EventArgs e) => chart1.Series["GRAFICO"].ChartType = SeriesChartType.Line;
        private void button1_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta("Select * from tipos_de_tarjeta"); //hacemos el query
            DataTable table = new DataTable();
            adapter.Fill(table);
            chart1.DataSource = table;
            chart1.Series["GRAFICO"].XValueMember = "nombre";
            chart1.Series["GRAFICO"].YValueMembers = "id";
            chart1.Titles.Add("tipo de tarjetas");
        }

        private void chart1_Click(object sender, EventArgs e)
        {

        }
    }
}
