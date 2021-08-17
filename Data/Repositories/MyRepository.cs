using AdminMyShop.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AdminMyShop.Data.Repositories
{
    public abstract class MyRepository<TEntity> : IRepository<TEntity>
       where TEntity : class, IEntity
    {
        protected readonly ApplicationDbContext Context;
        protected readonly DbSet<TEntity> DbSet;

        public MyRepository(ApplicationDbContext context)
        {
            Context = context;
            DbSet = Context.Set<TEntity>();
        }

        public async Task<TEntity> GetById(int id)
        {
            return await DbSet.FindAsync(id);
        }

        public async Task<TEntity> Create(TEntity entity)
        {
            DbSet.Add(entity);
            await Context.SaveChangesAsync();

            return entity;
        }

        public async Task<TEntity> Update(TEntity entity)
        {
            Context.Entry(entity).State = EntityState.Modified;
            await Context.SaveChangesAsync();

            return entity;
        }

        public async void DeleteById(int id)
        {
            var entity = await DbSet.FindAsync(id);
            if (entity == null)
            {
                throw new KeyNotFoundException();
            }

            DbSet.Remove(entity);
            await Context.SaveChangesAsync();

        }

    }
}
