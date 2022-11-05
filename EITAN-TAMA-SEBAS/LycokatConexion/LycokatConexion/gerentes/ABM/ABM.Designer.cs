namespace LycokatConexion
{
    partial class ABM
    {
        /// <summary> 
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de componentes

        /// <summary> 
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.button2 = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.eliminarSupervisor1 = new LycokatConexion.EliminarSupervisor();
            this.vistaSupervisores1 = new LycokatConexion.VistaSupervisores();
            this.añadirSupervisor1 = new LycokatConexion.AñadirSupervisor();
            this.SuspendLayout();
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(64)))), ((int)(((byte)(0)))));
            this.button2.FlatAppearance.BorderSize = 2;
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button2.Font = new System.Drawing.Font("Lucida Sans Unicode", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button2.Location = new System.Drawing.Point(39, 148);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(99, 43);
            this.button2.TabIndex = 21;
            this.button2.Text = "Añadir";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button5
            // 
            this.button5.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(64)))), ((int)(((byte)(0)))));
            this.button5.FlatAppearance.BorderSize = 2;
            this.button5.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button5.Font = new System.Drawing.Font("Lucida Sans Unicode", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button5.Location = new System.Drawing.Point(39, 217);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(99, 43);
            this.button5.TabIndex = 22;
            this.button5.Text = "Modificar";
            this.button5.UseVisualStyleBackColor = false;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // button6
            // 
            this.button6.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(64)))), ((int)(((byte)(0)))));
            this.button6.FlatAppearance.BorderSize = 2;
            this.button6.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button6.Font = new System.Drawing.Font("Lucida Sans Unicode", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button6.Location = new System.Drawing.Point(39, 80);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(99, 43);
            this.button6.TabIndex = 23;
            this.button6.Text = "Vista";
            this.button6.UseVisualStyleBackColor = false;
            this.button6.Click += new System.EventHandler(this.button6_Click);
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(128)))), ((int)(((byte)(64)))), ((int)(((byte)(0)))));
            this.button1.FlatAppearance.BorderSize = 2;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.button1.Font = new System.Drawing.Font("Lucida Sans Unicode", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.button1.Location = new System.Drawing.Point(39, 286);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(99, 43);
            this.button1.TabIndex = 26;
            this.button1.Text = "Eliminar";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.button1_Click_1);
            // 
            // eliminarSupervisor1
            // 
            this.eliminarSupervisor1.Location = new System.Drawing.Point(326, 26);
            this.eliminarSupervisor1.Name = "eliminarSupervisor1";
            this.eliminarSupervisor1.Size = new System.Drawing.Size(575, 409);
            this.eliminarSupervisor1.TabIndex = 27;
            this.eliminarSupervisor1.Load += new System.EventHandler(this.eliminarSupervisor1_Load);
            // 
            // vistaSupervisores1
            // 
            this.vistaSupervisores1.Location = new System.Drawing.Point(410, 70);
            this.vistaSupervisores1.Name = "vistaSupervisores1";
            this.vistaSupervisores1.Size = new System.Drawing.Size(601, 365);
            this.vistaSupervisores1.TabIndex = 25;
            this.vistaSupervisores1.Load += new System.EventHandler(this.vistaSupervisores1_Load);
            // 
            // añadirSupervisor1
            // 
            this.añadirSupervisor1.Location = new System.Drawing.Point(355, 35);
            this.añadirSupervisor1.Name = "añadirSupervisor1";
            this.añadirSupervisor1.Size = new System.Drawing.Size(546, 348);
            this.añadirSupervisor1.TabIndex = 24;
            this.añadirSupervisor1.Load += new System.EventHandler(this.añadirSupervisor1_Load);
            // 
            // ABM
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.Controls.Add(this.button1);
            this.Controls.Add(this.button6);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.añadirSupervisor1);
            this.Controls.Add(this.eliminarSupervisor1);
            this.Controls.Add(this.vistaSupervisores1);
            this.Name = "ABM";
            this.Size = new System.Drawing.Size(1040, 488);
            this.Load += new System.EventHandler(this.ABM_Load);
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.Button button6;
        private AñadirSupervisor añadirSupervisor1;
        private VistaSupervisores vistaSupervisores1;
        private System.Windows.Forms.Button button1;
        private EliminarSupervisor eliminarSupervisor1;
    }
}
