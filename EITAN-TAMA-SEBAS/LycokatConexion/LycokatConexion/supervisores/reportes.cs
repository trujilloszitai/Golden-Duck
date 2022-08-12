using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace LycokatConexion
{
    public partial class Reportes : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public Reportes() => InitializeComponent();
        private void textBox1_TextChanged(object sender, EventArgs e){}
        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                adapter = conexion.Consulta("");
                DataTable table = new DataTable();
                adapter.Fill(table);
                dataGridView1.DataSource = table;
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
        private void label1_Click(object sender, EventArgs e){}
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e) {}
        private void Reportes_Load(object sender, EventArgs e){}
    }
}
