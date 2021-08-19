using System.Collections.Generic;
using System.Threading.Tasks;

namespace AdminMyShop.Data.Interfaces
{
    public interface IRepository<T> where T : class, IEntity
    {
        Task<IEnumerable<T>> Get();
        Task<T> GetById(int id);
        Task<T> Create(T entity);
        Task<T> Update(T entity);
        void DeleteById(int id);
    }
}
