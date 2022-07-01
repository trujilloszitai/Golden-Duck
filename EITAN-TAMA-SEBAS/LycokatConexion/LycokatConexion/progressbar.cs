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
    public partial class progressbar : Form
    {
        public progressbar()
        {
            InitializeComponent();
        }
        Int32 contador;
        private void progressBar1_Click(object sender, EventArgs e)
        {
            progressBar1.Value = 0 ;
            progressBar1.Maximum = 300;
            timer1.Interval = 40;
            timer1.Enabled = true;

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (contador < 300)
            {
                progressBar1.Value = contador;
                contador = contador + 20;
            }
            else
            {
                this.Close();
                Form formulario = new menuG();
                formulario.Show();
            }
        }
    }
}
