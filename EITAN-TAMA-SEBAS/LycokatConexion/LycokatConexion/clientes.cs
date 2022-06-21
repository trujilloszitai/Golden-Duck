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
    public partial class clientes : Form
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking2; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        //SqlCommand command;
        public clientes()=>InitializeComponent();
        private void clientes_Load(object sender, EventArgs e){}
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e){}
        private void button1_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta("Select * from tipos_de_tarjeta"); //hacemos el query
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table; //le decimos a donde se enviara la informacion
            chart1.DataSource = table;
            chart1.Series["GRAFICO"].XValueMember = "nombre";
            chart1.Series["GRAFICO"].YValueMembers = "id";
            chart1.Titles.Add("tipo de tarjetas");
        }
        private void chart1_Click(object sender, EventArgs e){}
        private void textBox3_TextChanged(object sender, EventArgs e){}
        private void textBox1_TextChanged(object sender, EventArgs e){}
        private void button2_Click(object sender, EventArgs e)
        {
            adapter = conexion.Consulta($"SELECT * FROM tipos_de_tarjeta WHERE nombre LIKE '{textBox1.Text}%'"); 
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
            /* command = conexion.Comando("SELECT * FROM tipos_de_tarjeta WHERE id = @id");
             command.Parameters.AddWithValue("@id", textBox1.Text);
             SqlDataReader  registro = command.ExecuteReader();
             if (registro.Read())
             {
                 textBox2.Text = registro["nombre"].ToString();
                 registro.Close();
             }*/
        }
        private void button3_Click_1(object sender, EventArgs e)=>textBox1.Text = String.Empty;
        private void button4_Click(object sender, EventArgs e)=>chart1.Series["GRAFICO"].ChartType = SeriesChartType.Bar;
        private void button5_Click_1(object sender, EventArgs e) => chart1.Series["GRAFICO"].ChartType = SeriesChartType.Pie;
        private void button6_Click(object sender, EventArgs e) =>chart1.Series["GRAFICO"].ChartType = SeriesChartType.Area;
        private void button7_Click(object sender, EventArgs e) =>chart1.Series["GRAFICO"].ChartType = SeriesChartType.Line;
        private void pictureBox1_Click(object sender, EventArgs e){ }
        private void button8_Click(object sender, EventArgs e)
        {
            this.IsMdiContainer = true;
            Form index = new Form();
            index.MdiParent = this;
            index.Show();
        }
    }
}
