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
    public partial class LogIn : Form
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = DESKTOP-Q3RKHA9\\SQLEXPRESS; Initial Catalog = HomebankingUSAR; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public LogIn()
        {
            InitializeComponent();
        }

        private void pictureBox3_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            login();
        }
        public void login()
        {
            try
            {
                adapter = conexion.Consulta($"exec LogInSupger '{textBox1.Text}', '{textBox2.Text}'");//si les sale un error del tipo de valor (ntext) es pq el sql no lo reconoce. solucion: cambiarlo por un nvarchar y ya
                DataTable tabla = new DataTable();
                adapter.Fill(tabla);
                if (tabla.Rows.Count >= 1)
                {
                    MessageBox.Show(tabla.Rows[0]["Rango"].ToString());
                    try
                    {
                        if (tabla.Rows[0]["Rango"].ToString() == "gerente")//autentifica si es que en el lugar 0, 1 (email_us del comando en este caso) es gerente
                        {
                            conexion.cerrar();
                            Form formulario = new menuGerentes();
                            formulario.Show();
                            this.Hide();
                        }
                        else if (tabla.Rows[0]["Rango"].ToString() == "supervisor")
                        {
                            conexion.cerrar();
                            Form formulario = new menuSupervisores();
                            formulario.Show();
                            this.Hide();
                        }
                        else
                        {
                            MessageBox.Show("Datos incorrectos", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        }
                    }
                    catch
                    {
                        MessageBox.Show("Datos incorrectos", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                }
                else
                {
                    MessageBox.Show("Datos incorrectos", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
            }
            catch (Exception ex)
            {
                var resultado = MessageBox.Show("Hubo un error inesperado. Presione Yes si quiere saber mas informacion", "Error", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
                if (resultado == DialogResult.OK)
                {
                    MessageBox.Show(ex.Message);
                }
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            conexion.cerrar();
            Form formulario = new menuSupervisores();
            formulario.Show();
            this.Hide();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            conexion.cerrar();
            Form formulario = new menuGerentes();
            formulario.Show();
            this.Hide();
        }

        private void button5_Click_1(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void LogIn_Load(object sender, EventArgs e)
        {

        }

        private void pictureBox3_Click_1(object sender, EventArgs e)
        {
        }
        private void button5_Click_2(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
