using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LycokatConexion
{
    public partial class AñadirSupervisor : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = DESKTOP-Q3RKHA9\\SQLEXPRESS; Initial Catalog = HomebankingUSAR; Integrated Security = True");
        SqlDataAdapter adapter;
        public AñadirSupervisor()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                adapter = conexion.Consulta($"exec AddSupger 'gerente','{textBox2.Text}','{textBox3.Text}'");
                DataTable table = new DataTable();
                adapter.Fill(table);
                MessageBox.Show($"El gerente {textBox2.Text} se agregó correctamente", "Enhorabuena", MessageBoxButtons.OK);
   //             dataGridView1.DataSource = table;
            }
            catch (Exception ex) //en caso de error se imprimira cual es la falla
            {
                var resultado = MessageBox.Show("Hubo un error inesperado. Presione Yes si quiere saber mas informacion", "Error", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                if (resultado == DialogResult.OK)
                {
                    MessageBox.Show(ex.Message);
                }
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            textBox2.Text = String.Empty;
            textBox3.Text = String.Empty;
        }

        private void AñadirSupervisor_Load(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }
    }
}
