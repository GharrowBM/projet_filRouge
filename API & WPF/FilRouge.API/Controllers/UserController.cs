﻿using FilRouge.Classes;
using FilRouge.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FilRouge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IRepository<User> _userRepository;

        public UserController(IRepository<User> userRepository) 
        {
            _userRepository = userRepository;
        }

        // GET: api/<APIController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userRepository.GetAll());
        }

        // GET api/<APIController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_userRepository.Get(id));
        }

        // POST api/<APIController>
        [HttpPost]
        public IActionResult Post([FromForm] User user)
        {
            return Ok(_userRepository.Add(user));
        }

        // PUT api/<APIController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromForm] User user)
        {
            return Ok(_userRepository.Update(id, user));
        }

        // DELETE api/<APIController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_userRepository.Delete(id));
        }
    }
}