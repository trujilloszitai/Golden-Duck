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
    public partial class ABM : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = DESKTOP-Q3RKHA9\\SQLEXPRESS; Initial Catalog = HomebankingUSAR; Integrated Security = True");
        SqlDataAdapter adapter;
        public ABM(){InitializeComponent();}
        private void ABM_Load(object sender, EventArgs e)
        {
            this.añadirSupervisor1.Hide();
            this.eliminarSupervisor1.Hide();
            this.vistaSupervisores1.Show();
        }
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            /*
            adapter = conexion.Consulta("Select * from tipos_de_tarjeta");
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
            */
        }
        private void textBox1_TextChanged(object sender, EventArgs e){}
       
      
        private void pictureBox1_Click(object sender, EventArgs e){}
        private void button1_Click(object sender, EventArgs e)
        {
           
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.añadirSupervisor1.Show();
            this.vistaSupervisores1.Hide();
            this.eliminarSupervisor1.Hide();
        }

        private void usuariosVista1_Load(object sender, EventArgs e)
        {

        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.vistaSupervisores1.Show();
            this.eliminarSupervisor1.Hide();
            this.añadirSupervisor1.Hide();
        }

        private void button5_Click(object sender, EventArgs e)
        {

        }

        private void vistaSupervisores1_Load(object sender, EventArgs e)
        {

        }

        private void eliminarSupervisor1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            this.añadirSupervisor1.Hide();
            this.vistaSupervisores1.Hide();
            this.eliminarSupervisor1.Show();
        }

        private void añadirSupervisor1_Load(object sender, EventArgs e)
        {

        }
    }
}