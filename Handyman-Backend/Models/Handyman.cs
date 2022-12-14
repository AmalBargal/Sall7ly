// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace HandyMan.Models
{
    [Table("Handyman")]
    [Index("Handyman_Mobile", Name = "UQ__Handyman__F297F34DD98DA7CB", IsUnique = true)]
    public partial class Handyman
    {
        public Handyman()
        {
            Requests = new HashSet<Request>();
            Schedules = new HashSet<Schedule>();
            Regions = new HashSet<Region>();
        }

        [Key]
        public int Handyman_SSN { get; set; }
        [Required]
        [StringLength(50)]
        [Unicode(false)]
        public string Handyman_Name { get; set; }
        [Required]
        [StringLength(11)]
        [Unicode(false)]
        public string Handyman_Mobile { get; set; }
        public int CraftID { get; set; }
        public int Handyman_Fixed_Rate { get; set; }
        public bool? Approved { get; set; }
        public bool? Open_For_Work { get; set; }
        [Unicode(false)]
        public string? Handyman_Photo { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string? Handyman_ID_Image { get; set; }
        [Unicode(false)]
        public string? Handyman_Criminal_Record { get; set; }
        [StringLength(50)]
        [Unicode(false)]
        public string Password { get; set; }

        public int? Balance { get; set; } = 0;

        [Range(1, 5)]
        public double? Rating { get; set; } = 0;

        [ForeignKey("CraftID")]
        [InverseProperty("Handymen")]
        public virtual Craft? Craft { get; set; }
        [InverseProperty("Handyman_SSNNavigation")]
        public virtual ICollection<Request>? Requests { get; set; }
        [InverseProperty("Handy_SSNNavigation")]
        public virtual ICollection<Schedule>? Schedules { get; set; }

        [ForeignKey("Handyman_SSN")]
        [InverseProperty("Handyman_SSNs")]
        public virtual ICollection<Region>? Regions { get; set; }
    }
}