using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LycokatConexion
{
    public partial class menuSupervisores : Form
    {
        public menuSupervisores() {InitializeComponent();}
        private void pictureBox2_Click(object sender, EventArgs e) {}
        private void button3_Click(object sender, EventArgs e) {}
        private void reportes1_Load(object sender, EventArgs e) {}
        private void estadisticas1_Load(object sender, EventArgs e) {}
        private void menuSupervisores_Load(object sender, EventArgs e) {}
        private void usuarios2_Load(object sender, EventArgs e) {this.usuarios1.Hide();}
        private void button1_Click(object sender, EventArgs e)
        {
            this.usuarios1.Show();
            this.estadisticas1.Hide();
            this.reportes1.Hide();
        }
        private void usuarios1_Load(object sender, EventArgs e) {
            var mensajeDeAyuda = new ToolTip(); //la herramienta para generar nubes de ayudas
            mensajeDeAyuda.SetToolTip(btnUsuarios, "Te dirigira a la seccion para ver los usuarios");
            mensajeDeAyuda.SetToolTip(btnEstadisticas, "Te dirigira a la seccion de vista de estadisticas de usuarios");
            this.reportes1.Hide();
            this.usuarios1.Hide();
            this.estadisticas1.Hide();
        }
        private void button2_Click(object sender, EventArgs e)
        {
            this.estadisticas1.Show();
            this.usuarios1.Hide();
            this.reportes1.Hide();
        }
        private void button4_Click(object sender, EventArgs e)
        {
            Form index = new index();
            index.Show();
            this.Close();
        }
        private void button3_Click_1(object sender, EventArgs e)
        {
            this.reportes1.Show();
            this.usuarios1.Hide();
            this.estadisticas1.Hide();
        }
        private void button1_Click_1(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button5_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
