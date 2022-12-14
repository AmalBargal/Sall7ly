// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using HandyMan.Models;

namespace HandyMan.Data
{
    public partial class Handyman_DBContext : DbContext
    {
        public Handyman_DBContext()
        {
        }

        public Handyman_DBContext(DbContextOptions<Handyman_DBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Craft> Crafts { get; set; }
        public virtual DbSet<Handyman> Handymen { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<Region> Regions { get; set; }
        public virtual DbSet<Request> Requests { get; set; }
        public virtual DbSet<Schedule> Schedules { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=SHAHEER-DELL\\SS17;Initial Catalog=Handyman_DB;Integrated Security=True");
            }
        }*/

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>(entity =>
            {
                entity.HasOne(d => d.Region)
                    .WithMany(p => p.Clients)
                    .HasForeignKey(d => d.Region_ID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Client_Region");
                //entity.HasIndex(e => e.Client_Email).IsUnique();

            });

            modelBuilder.Entity<Craft>(entity =>
            {
                entity.HasKey(e => e.Craft_ID)
                    .HasName("PK__Craft__D37F5DD90F011EA7");
            });

            modelBuilder.Entity<Handyman>(entity =>
            {
                entity.HasKey(e => e.Handyman_SSN)
                    .HasName("PK__Handyman__9C5E1C4351B08EA4");

                entity.Property(e => e.Handyman_SSN).ValueGeneratedNever();

                entity.Property(e => e.Approved).HasDefaultValueSql("((0))");

                entity.Property(e => e.Open_For_Work).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Craft)
                    .WithMany(p => p.Handymen)
                    .HasForeignKey(d => d.CraftID)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Handyman_Craft");

                entity.HasMany(d => d.Regions)
                    .WithMany(p => p.Handyman_SSNs)
                    .UsingEntity<Dictionary<string, object>>(
                        "Handyman_Region",
                        l => l.HasOne<Region>().WithMany().HasForeignKey("Region_ID").OnDelete(DeleteBehavior.Cascade).HasConstraintName("FK_Handyman_Region_Region"),
                        r => r.HasOne<Handyman>().WithMany().HasForeignKey("Handyman_SSN").OnDelete(DeleteBehavior.Cascade).HasConstraintName("FK_Handyman_Region_Handyman"),
                        j =>
                        {
                            j.HasKey("Handyman_SSN", "Region_ID");

                            j.ToTable("Handyman_Region");

                            j.IndexerProperty<int>("Handyman_SSN").ValueGeneratedNever();
                        });
            });

            modelBuilder.Entity<Payment>(entity =>
            {
                entity.HasKey(e => new { e.Payment_ID, e.Request_ID });

                entity.Property(e => e.Payment_ID).ValueGeneratedOnAdd();

                entity.Property(e => e.Payment_Status).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Request)
                    .WithMany(p => p.Payments)
                    .HasForeignKey(d => d.Request_ID)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Payment_Request");
            });

            modelBuilder.Entity<Region>(entity =>
            {
                entity.HasKey(e => e.Region_ID)
                    .HasName("PK__Region__A9EAD51FEE4C6713");
            });

            modelBuilder.Entity<Request>(entity =>
            {
                //entity.Property(e => e.Request_ID).ValueGeneratedNever();

                entity.Property(e => e.Request_Date).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Request_Status).HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Client)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.Client_ID)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Request_Client");

                entity.HasOne(d => d.Handyman_SSNNavigation)
                    .WithMany(p => p.Requests)
                    .HasForeignKey(d => d.Handyman_SSN)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK_Request_Handyman");
            });

            modelBuilder.Entity<Schedule>(entity =>
            {
                entity.HasKey(e => new { e.Handy_SSN, e.Time_From, e.Schedule_Date })
                    .HasName("PK__Schedule__79B9CA37213B802B");

                entity.HasOne(d => d.Handy_SSNNavigation)
                    .WithMany(p => p.Schedules)
                    .HasForeignKey(d => d.Handy_SSN)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Schedule__Handy___4BAC3F29");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}