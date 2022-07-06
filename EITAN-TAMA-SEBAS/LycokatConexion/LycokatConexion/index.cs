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
using System.Configuration;

namespace LycokatConexion
{
    public partial class index : Form
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking2; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public index()=>InitializeComponent();
        private void index_Load(object sender, EventArgs e){}
        private void button2_Click(object sender, EventArgs e)
        {
            Form formulario = new menuSupervisores();
            formulario.Show();
            this.Hide();
        }
        private void button3_Click(object sender, EventArgs e)
        {
            Form formulario = new menuGerentes();
            formulario.Show();
            this.Hide();
        }
        private void button4_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
        private void textBox1_TextChanged(object sender, EventArgs e){ }
        private void textBox2_TextChanged(object sender, EventArgs e){}
        private void button1_Click(object sender, EventArgs e)
        {
            login();
        }
        public void login()
        {
            try
            {
                adapter = conexion.Consulta($"SELECT nom_us, email_us FROM usuarios_banco WHERE nom_us = '{textBox1.Text}' AND apell_us = '{textBox2.Text}'");//si les sale un error del tipo de valor (ntext) es pq el sql no lo reconoce. solucion: cambiarlo por un nvarchar y ya
                DataTable tabla = new DataTable();
                adapter.Fill(tabla);
                    if (tabla.Rows.Count >= 1) {
                        if (tabla.Rows[0][1].ToString() == "gerente")//autentifica si es que en el lugar 0, 1 (email_us del comando en este caso) es gerente
                        {
                            Form formulario = new menuGerentes();
                            formulario.Show();
                            this.Hide();
                        }
                        else if(tabla.Rows[0][1].ToString() == "supervisor")
                        {
                            Form formulario = new menuSupervisores();
                            formulario.Show();
                            this.Hide();
                        }
                        else
                        {
                            MessageBox.Show("Datos incorrectos");
                        }
                    }
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
