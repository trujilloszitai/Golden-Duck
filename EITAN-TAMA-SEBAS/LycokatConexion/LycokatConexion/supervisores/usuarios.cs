﻿using System;
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
    public partial class usuarios : UserControl
    {
        BaseDeDatos conexion = new BaseDeDatos("Data Source = BABYFACE\\SQLEXPRESS; Initial Catalog = Homebanking2; Integrated Security = True"); //le ponemos el nombre de la BD
        SqlDataAdapter adapter;
        public usuarios(){ InitializeComponent(); }
        private void usuarios_Load(object sender, EventArgs e){}
        private void pictureBox3_Click(object sender, EventArgs e) {}
        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            /*
            adapter = conexion.Consulta("SELECT * FROM usuarios_banco "); //hacemos el query
            DataTable table = new DataTable();
            adapter.Fill(table);
            dataGridView1.DataSource = table;
            */
        }
        private void button1_Click(object sender, EventArgs e)
        {
            try 
            {
                adapter = conexion.Consulta("SELECT * FROM usuarios_banco "); //hacemos el query
                DataTable table = new DataTable();
                adapter.Fill(table);
                dataGridView1.DataSource = table;
            }
            catch (Exception ex) //en caso de error se imprimira cual es la falla
            {
               var resultado = MessageBox.Show("Hubo un error inesperado. Presione Yes si quiere saber mas informacion", "Error", MessageBoxButtons.OKCancel , MessageBoxIcon.Warning);
                if (resultado == DialogResult.OK)
                {
                    MessageBox.Show(ex.Message);
                }
            }
        }
    }
}