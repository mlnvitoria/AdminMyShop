using AdminMyShop.Data.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace AdminMyShop.Controllers
{
    [Authorize]
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public abstract class MyController<TEntity, TRepository> : ControllerBase
        where TEntity : class, IEntity
        where TRepository : IRepository<TEntity>
    {
        protected readonly TRepository Repository;

        public MyController(TRepository repository)
        {
            Repository = repository;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>> GetById(int id)
        {
            var entity = await Repository.GetById(id);
            if (entity == null)
            {
                return NotFound();
            }

            return entity;
        }

        // POST: api/[controller]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost]
        public virtual async Task<ActionResult<TEntity>> Post(TEntity entity)
        {
            await Repository.Create(entity);

            return Created("", entity);
        }

        // PUT: api/[controller]/5
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, TEntity entity)
        {
            if (id != entity.Id)
            {
                return BadRequest();
            }
            TEntity result = await Repository.Update(entity);

            if (result == null)
            {
                return BadRequest();
            }

            return NoContent();
        }

        // DELETE: api/[controller]/5
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpDelete("{id}")]
        public ActionResult<TEntity> Delete(int id)
        {
            Repository.DeleteById(id);

            return Accepted();
        }

    }
}
